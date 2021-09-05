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
    public class FoodItemController : Controller
    {

        private readonly RestaurantDbContext _context;

        public FoodItemController(RestaurantDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var foodItems = _context.FoodItems.ToList();

            return View(foodItems);
        }

        public IActionResult Detail(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var foodItem = _context.FoodItems.Find(id);
            if (foodItem == null)
            {
                return NotFound();
            }

            return View(foodItem);
        }

        public IActionResult Create()
        {

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(FoodItem foodItem)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }

            var isExist = await _context.FoodItems.AnyAsync(x => x.FoodItemName.ToLower() == foodItem.FoodItemName.ToLower());
            if (isExist)
            {
                ModelState.AddModelError("FoodItemName", "Food item with this name is already existed.");
                return View();
            }

            await _context.FoodItems.AddAsync(foodItem);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }
    }
}
