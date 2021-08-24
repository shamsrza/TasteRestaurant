using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TasteRestaurantAPI.Models
{
    public class UserRepository : IUserRepository
    {
        private readonly RestaurantDbContext _context;
        public UserRepository(RestaurantDbContext context)
        {
            _context = context;
        }
        public User Create(User user)
        {
            _context.Users.Add(user);
            user.UserId = _context.SaveChanges();

            return user;
        }
        public User GetByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);

        }

        public User GetById(int id)
        {
            return _context.Users.FirstOrDefault(u => u.UserId == id);

        }
    }
}
