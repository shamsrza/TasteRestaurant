using Microsoft.EntityFrameworkCore.Migrations;

namespace TasteRestaurantAPI.Migrations
{
    public partial class AddingAddressIntoOrderMasterAndDeletingUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderMasters_Users_UserId",
                table: "OrderMasters");

            migrationBuilder.DropIndex(
                name: "IX_OrderMasters_UserId",
                table: "OrderMasters");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "OrderMasters");

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "OrderMasters",
                type: "nvarchar(100)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "OrderMasters");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "OrderMasters",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_OrderMasters_UserId",
                table: "OrderMasters",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderMasters_Users_UserId",
                table: "OrderMasters",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
