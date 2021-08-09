using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TasteRestaurantAPI.Models
{
    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }

        [Column(TypeName="nvarchar(100)")]
        [Required]
        public string CustomerName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string Email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string Password { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string ConfirmPassword { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string Address { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string PhoneNumber { get; set; }
    }
}
