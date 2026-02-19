using System;
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AccountController(AppDbContext context) : BaseApiController
{
   [HttpPost("register")] // api/account/register
   public async Task<ActionResult<AppUsers>> Register(string email, string displayName, string password)
    {
        using var hmac = new HMACSHA512();
        var user = new AppUsers
        {
            DisplayName = displayName,
            Email = email,
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
            PasswordSalt = hmac.Key    
        };
        context.Users.Add(user);
        await context.SaveChangesAsync();

        return user;
    } 
}
