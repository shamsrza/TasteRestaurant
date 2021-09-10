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

            foreach (var item in reservations)
            {
                  TempData["ReservationNumber"] = item.ReservationNumber;
            }
            return View(reservations);
        }

        public IActionResult Detail(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var reservationDetail = _context.Reservations.Find(id);
            if (reservationDetail == null)
            {
                return NotFound();
            }

            TempData["ReservationNumber"] = reservationDetail.ReservationNumber;

            return View(reservationDetail);
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

            //var isExist = await _context.Reservations.AnyAsync(x => x.TableNumber == reservation.TableNumber && x.Date == reservation.Date);
            //if (isExist)
            //{
            //    ModelState.AddModelError("TableNumber", "This table is booked for this date.");
            //    return View();
            //}
            Random rnd = new Random();
            var randomNumber = rnd.Next(100000, 999999).ToString();
            reservation.ReservationNumber = randomNumber;

            await _context.Reservations.AddAsync(reservation);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Update(int? id)
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

            //reservation.ReservationNumber = (string) TempData["ReservationNumber"];

            return View(reservation);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [ActionName("Update")]
        public async Task<IActionResult> UpdatePost(int? id, Reservation reservation)
        {
            

            if (!ModelState.IsValid)
                return View();

            if (id == null)
            {
                return NotFound();
            }


            var dbreservation = await _context.Reservations.FindAsync(id);
            if (dbreservation == null)
            {
                return NotFound();
            }

            //var isExist = await _context.Reservations.AnyAsync(x => x.Date == reservation.Date
            //                                                  && x.TableNumber != reservation.TableNumber);
            //if (isExist)
            //{
            //    ModelState.AddModelError("Date", "This table is already reserved. Please choose another date");
            //    return View();
            //}


            dbreservation.Date = reservation.Date;
            dbreservation.Time = reservation.Time;
            dbreservation.TableNumber = reservation.TableNumber;
            dbreservation.NumberOfGuests = reservation.NumberOfGuests;
            dbreservation.ReservationNumber = (string)TempData["ReservationNumber"];
            dbreservation.PhoneNumber = reservation.PhoneNumber;
            
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
