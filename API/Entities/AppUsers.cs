using System;

namespace API.Entities;

public class AppUsers
{
    public string ID { get; set; } = Guid.NewGuid().ToString();
    public string? DisplayName {get; set;}
    public string? Email {get; set;}
}
