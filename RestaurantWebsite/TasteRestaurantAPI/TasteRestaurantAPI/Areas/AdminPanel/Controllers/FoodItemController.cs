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

        public async Task<IActionResult> Update(int? id)
        {
            if(id == null)
            {
                return NotFound();
            }

            var foodItem = await _context.FoodItems.FindAsync(id);
            if (foodItem == null)
            {
                return NotFound();
            }

            return View(foodItem);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Update(int? id, FoodItem fItem)
        {
            if (!ModelState.IsValid)
                return View();

            if (id == null)
            {
                return NotFound();
            }

            if(id != fItem.FoodItemId)
            {
                return BadRequest();
            }

            var dbFoodItem = await _context.FoodItems.FindAsync(id);
            if (dbFoodItem == null)
            {
                return NotFound();
            }

            var isExist = await _context.FoodItems.AnyAsync(x => x.FoodItemName.ToLower() == fItem.FoodItemName.ToLower() 
                                                              && x.FoodItemId != id);
            if (isExist)
            {
                ModelState.AddModelError("FoodItemName", "Food item with this name is already existed.");
                return View();
            }
            return View();

            dbFoodItem.FoodItemName = fItem.FoodItemName;
            dbFoodItem.Description = fItem.Description;
            dbFoodItem.Price = fItem.Price;

            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }


        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var foodItem = await _context.FoodItems.FindAsync(id);
            if (foodItem == null)
            {
                return NotFound();
            }

            return View(foodItem);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [ActionName("Delete")]
        public async Task<IActionResult> DeleteFoodItem(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var foodItem = await _context.FoodItems.FindAsync(id);
            if (foodItem == null)
            {
                return NotFound();
            }

            _context.FoodItems.Remove(foodItem);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }
    }
}
