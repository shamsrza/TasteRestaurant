using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TasteRestaurantAPI.Models;

namespace TasteRestaurantAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly RestaurantDbContext _context;

        public ReservationController(RestaurantDbContext context)
        {
            _context = context;
        }

        // GET: api/Reservation
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reservation>>> GetReservations()
        {
            return await _context.Reservations.ToListAsync();
        }

        // GET: api/Reservation/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reservation>> GetReservation(int id)
        {
            //var reservation = await _context.Reservations.FindAsync(id);

            var reservation = await (from a in _context.Set<Reservation>()
                                     where a.ReservationId == id

                                     select new
                                     {
                                         a.ReservationId,
                                         a.ReservationNumber,
                                         a.PhoneNumber,
                                         a.NumberOfGuests,
                                         a.Date,
                                         a.Time,
                                         a.TableNumber,
                                         a.Message,
                                         deletedOrderItemIds = ""
                                     }).FirstOrDefaultAsync();

            if (reservation == null)
            {
                return NotFound();
            }

            return Ok(reservation);
        }

        // PUT: api/Reservation/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservation(int id, Reservation reservation)
        {
            if (id != reservation.ReservationId)
            {
                return BadRequest();
            }

            _context.Entry(reservation).State = EntityState.Modified;


            //deleted food items
            //foreach (var i in reservation.DeletedOrderItemIds.Split(',').Where(x => x != ""))
            //{
            //    OrderDetail y = _context.OrderDetails.Find(Convert.ToInt64(i));
            //    _context.OrderDetails.Remove(y);
            //}


            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Reservation
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Reservation>> PostReservation(Reservation reservation)
        {
            //var reservedDate = await _context.Reservations.FindAsync(reservation.Date);
            //var reservedTable = await _context.Reservations.FindAsync(reservation.TableNumber);
            //var isExistReservation = await _context.Reservations.FindAsync(reservation.Date, reservation.TableNumber);
            //if (isExistReservation == null)
            //{
            //    ModelState.AddModelError("", "This table is reserved for this date. Please select another option.");
            //    return BadRequest(new { message = "This table is booked for this date" });
            //}

            //if (reservationDate != null)
            //{
            //    if (reservationTable != null)
            //    {
            //        return BadRequest(new { message = "This table is booked for this date" });
            //    }

            //    _context.Reservations.Add(reservation);
            //    await _context.SaveChangesAsync();

            //}


            _context.Reservations.Add(reservation);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetReservation", new { id = reservation.ReservationId }, reservation);
            
        }

        // DELETE: api/Reservation/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservation(int id)
        {
            var reservation = await _context.Reservations.FindAsync(id);
            if (reservation == null)
            {
                return NotFound();
            }

            _context.Reservations.Remove(reservation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservationExists(int id)
        {
            return _context.Reservations.Any(e => e.ReservationId == id);
        }
    }
}
