using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TasteRestaurantAPI.Models
{
    public class FoodItem
    {
        [Key]
        public int FoodItemId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string FoodItemName { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Column(TypeName = "nvarchar(500)")]
        public string Description { get; set; }
    }
}
