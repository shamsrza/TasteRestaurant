using Microsoft.EntityFrameworkCore.Migrations;

namespace TasteRestaurantAPI.Migrations
{
    public partial class AddingTableNumberToReservationTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TableNumber",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TableNumber",
                table: "Reservations");
        }
    }
}
