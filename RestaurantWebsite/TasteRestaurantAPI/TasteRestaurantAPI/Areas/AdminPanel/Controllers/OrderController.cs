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
    public class OrderController : Controller
    {

        private readonly RestaurantDbContext _context;

        public OrderController(RestaurantDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
           var orders =  _context.OrderMasters.ToList();

            return View(orders);
        }


        public IActionResult Detail(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var order = _context.OrderMasters.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            return View(order);
        }


        //part of detail
        public IActionResult OrderedFoodItems(long? id)
        {
            var orderDetails = _context.OrderDetails.Where(x=> x.OrderMasterId == id).Include(y=> y.FoodItem).ToList();
            if (orderDetails == null)
            {
                return NotFound();
            }
            return View(orderDetails);
        }

        public IActionResult Create()
        {
            var orders = _context.OrderDetails.ToList();
            return View(orders);
        }

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Create(OrderMaster ordermaster)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return View();
        //    }

        //    var isExist = await _context.FoodItems.AnyAsync(x => x.FoodItemName.ToLower() == foodItem.FoodItemName.ToLower());
        //    if (isExist)
        //    {
        //        ModelState.AddModelError("FoodItemName", "Food item with this name is already existed.");
        //        return View();
        //    }

        //    await _context.FoodItems.AddAsync(foodItem);
        //    await _context.SaveChangesAsync();
        //    return RedirectToAction("Index");
        //}


        public async Task<IActionResult> Delete(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var orderMaster = await _context.OrderMasters.FindAsync(id);
            if (orderMaster == null)
            {
                return NotFound();
            }

            return View(orderMaster);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [ActionName("Delete")]
        public async Task<IActionResult> DeleteFoodItem(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var orderMaster = await _context.OrderMasters.FindAsync(id);
            if (orderMaster == null)
            {
                return NotFound();
            }

            _context.OrderMasters.Remove(orderMaster);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

    }
}
