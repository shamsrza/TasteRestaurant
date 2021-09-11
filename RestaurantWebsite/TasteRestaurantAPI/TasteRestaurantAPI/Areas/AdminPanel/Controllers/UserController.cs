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
    public class UserController : Controller
    {

        private readonly RestaurantDbContext _context;

        public UserController(RestaurantDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            var users = _context.Users.ToList();

            return View(users);
        }

        public IActionResult Detail( int? id)
        {
            if(id == null)
            {
                return NotFound();
            }

            var user = _context.Users.Find(id);
            if(user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }


        public IActionResult Create()
        {

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(User user)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }

            var isExist = await _context.Users.AnyAsync(x => x.Email == user.Email);
            if (isExist)
            {
                ViewBag.Message = String.Format("This user already exists. Please use another credentials", user.Email);
                //ModelState.AddModelError("Email", "Food item with this name is already existed.");
                return View();
            }

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Update(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Update(int? id, User user)
        {
            if (!ModelState.IsValid)
                return View();

            if (id == null)
            {
                return NotFound();
            }

            var dbUser = await _context.Users.FindAsync(id);
            if (dbUser == null)
            {
                return NotFound();
            }

            var isExist = await _context.Users.AnyAsync(x => x.Email == user.Email && x.UserId != id);
            if (isExist)
            {
                //ModelState.AddModelError("Email", "This user already exists.");
                ViewBag.Message = String.Format("This user already exists. Please use another credentials", user.Email, DateTime.Now.ToString());
                return View();

            }


            dbUser.Name = user.Name;
            dbUser.Email = user.Email;
            dbUser.Password = user.Password;

            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [ActionName("Delete")]
        public async Task<IActionResult> DeleteUser(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }
    }
}
