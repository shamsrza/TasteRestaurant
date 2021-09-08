using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TasteRestaurantAPI.Models;

namespace TasteRestaurantAPI.Areas.AdminPanel.Controllers
{
    [Area("AdminPanel")]
    public class ReservationController : Controller
    {
        private readonly RestaurantDbContext _context;

        public ReservationController (RestaurantDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            var reservations = _context.Reservations.ToList();
            return View(reservations);
        }

        public IActionResult Detail(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var reservation = _context.Reservations.Find(id);
            if (reservation == null)
            {
                return NotFound();
            }

            return View(reservation);
        }
        public IActionResult Create()
        {

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Reservation reservation)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }

            var isExist = await _context.Reservations.AnyAsync(x => x.TableNumber == reservation.TableNumber && x.Date == reservation.Date);
            if (isExist)
            {
                ModelState.AddModelError("TableNumber", "This table is booked for this date.");
                return View();
            }

            await _context.Reservations.AddAsync(reservation);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var reservation = await _context.Reservations.FindAsync(id);
            if (reservation == null)
            {
                return NotFound();
            }

            return View(reservation);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [ActionName("Delete")]
        public async Task<IActionResult> DeleteReservation(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var reservation = await _context.Reservations.FindAsync(id);
            if (reservation == null)
            {
                return NotFound();
            }

            _context.Reservations.Remove(reservation);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }
    }
}
