// ProductController.cs
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using RankingApp.Models;
[Route("api/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{
    private static List<ProductModel> items = new List<ProductModel>
    {
        new ProductModel { Id = 1, Name = "Item 1", Price = 10 },
        new ProductModel { Id = 2, Name = "Item 2", Price = 75 },
        new ProductModel { Id = 3, Name = "Item 2", Price = 57 },
        new ProductModel { Id = 4, Name = "Item 2", Price = 88 },
        new ProductModel { Id = 5, Name = "Item 2", Price = 20 },
        new ProductModel { Id = 6, Name = "Item 2", Price = 18 }
    };

    [HttpGet]
    public ActionResult<IEnumerable<ProductModel>> Get()
    {
        return Ok(items);
    }

    [HttpGet("{id}")]
    public ActionResult<ProductModel> Get(int id)
    {
        var item = items.FirstOrDefault(i => i.Id == id);
        if (item == null)
            return NotFound();
        return Ok(item);
    }

    [HttpPost]
    public ActionResult<ProductModel> Post(ProductModel item)
    {
        items.Add(item);
        return CreatedAtAction(nameof(Get), new { id = item.Id }, item);
    }

    // [HttpPut("{id}")]
    // public ActionResult Put(int id, ProductModel item)
    // {
    //     var existingItem = items.FirstOrDefault(i => i.Id == id);
    //     if (existingItem == null)
    //         return NotFound();

    //     existingItem.Name = item.Name;
    //     existingItem.Price = item.Price;
    //     return NoContent();
    // }

    // [HttpDelete("{id}")]
    // public ActionResult Delete(int id)
    // {
    //     var item = items.FirstOrDefault(i => i.Id == id);
    //     if (item == null)
    //         return NotFound();

    //     items.Remove(item);
    //     return NoContent();
    // }
}
