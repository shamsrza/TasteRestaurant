using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TasteRestaurantAPI.Models
{
    public class Reservation
    {
        [Key]
        public int ReservationId { get; set; }

        [Column(TypeName = "nvarchar(75)")]
        public string ReservationNumber { get; set; }


        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public int NumberOfGuests { get; set; }


        [Column(TypeName = "nvarchar(50)")]
        [Required]
        public string Date { get; set; }


        [Column(TypeName = "nvarchar(50)")]
        [Required]
        public string Time { get; set; }


        [Column(TypeName = "nvarchar(500)")]
        public string Message { get; set; }


    }
}
