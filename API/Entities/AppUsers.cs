using System;

namespace API.Entities;

public class AppUsers
{
    public string ID { get; set; } = Guid.NewGuid().ToString();
    public required string DisplayName {get; set;}
    public required string Email {get; set;}

    public string? ImageUrl { get; set; }
    public required byte[] PasswordHash {get; set;}
    public required byte[] PasswordSalt {get; set;}

    //navigation propertie
    public Member Member { get; set; } = null!;
}
