using Microsoft.AspNetCore.Mvc;
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

        public IActionResult Create()
        {

            return View();
        }
    }
}
