
const users = [
    {id: 1, firstName: "John", lastName: "Doe", email: "JohnDoe@gmail.com"}
]
module.exports = users


const products = [
    { tag: "featuredProducts", articleNumber: "d3984cd9-f121-4981-8d03-83198d441379", name: "Black coat", description: "", category: "Coats", price: 95, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-coat.png"},
    { tag: "", articleNumber: "20222c00-4548-4149-9efd-49883e9f57b5", name: "Black dress", description: "", category: "Dresses", price: 88, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-dress.png"},
    { tag: "", articleNumber: "19173bb6-20e1-4f81-ae63-c969a23e794e", name: "Black top & pants set", description: "", category: "Sets", price: 107, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-set.png"}, 
    { tag: "", articleNumber: "4bf6d7af-aa33-455c-9403-8301ea13071c", name: "White top & black pants set", description: "", category: "Sets", price: 115, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-white-set.png"},
    { tag: "", articleNumber: "77e280d3-7c56-41d0-8b48-1e5c8a4f1605", name: "Blue jacket", description: "", category: "Jackets", price: 299, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png"},
    { tag: "featuredProducts", articleNumber: "a268e0d8-010a-44c4-b4f0-738a01117573", name: "Blue hoody & pants", description: "", category: "Sets", price: 150, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-set.png"},
    { tag: "featuredProducts", articleNumber: "267e6b12-d558-49de-92c2-6b2a59433ce9", name: "Blue t-shirt", description: "", category: "T-Shirts", price: 25, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png"},
    { tag: "dealsProducts_2", articleNumber: "cda@aa8d-c0e1-41a7-ae26-343ffc84e141", name: "Brown sweater", description: "", category: "Sweaters", price: 35, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png"},
    { tag: "dealsProducts_1", articleNumber: "bf1fffeb-c30b-4380-8384-223d3c80b792", name: "Brown watch", description: "", category: "Watches", price: 150, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-watch.png"},
    { tag: "dealsProducts_1", articleNumber: "6c871493-805c-45e9-b66a-d62dd511c930", name: "Stiletto shoes", description: "", category: "Shoes", price: 89, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png"},
    { tag: "featuredProducts", articleNumber: "086841a8-fb2e-4ee6-80b1-4dce62e168ae", name: "Gray t-shirt", description: "", category: "T-Shirts", price: 15, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png"},
    { tag: "featuredProducts", articleNumber: "c9a6a993-cd15-4022-8858-77a5bcb6cc12", name: "Jeans dress", description: "", category: "Jeans", price: 55, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png"},
    { tag: "featuredProducts", articleNumber: "431255c5-eea7-40bd-9260-06ad7e83fbcd", name: "Jeans jacket & pants", description: "", category: "Sets", price: 110, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-set.png"},
    { tag: "dealsProducts_2", articleNumber: "133740ce-f0fe-4ebf-936d-3319237743e2", name: "Olive sweater", description: "", category: "Sweaters", price: 19, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png"},
    { tag: "dealsProducts_2", articleNumber: "dafda4ec-f15e-4e23-b223-b9f037a894a7", name: "Multicolor t-shirt", description: "", category: "T-shirts", price: 25, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png"},
    { tag: "", articleNumber: "b3044087-7272-4885-9da7-69b1b769fa3b", name: "Purple handbag", description: "", category: "Bags", price: 99, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/purple-bag.png"},
    { tag: "dealsProducts_2", articleNumber: "1721de3f-4104-4a8f-b090-fb385c446146", name: "Red handbag", description: "", category: "Bags", price: 105, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/red-bag.png"},
    { tag: "featuredProducts", articleNumber: "fab80814-1d85-4c31-a6df-4c0385a1607b", name: "Red dress", description: "", category: "Dresses", price: 67, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/red-dress.png"},
    { tag: "featuredProducts", articleNumber: "6e42e94a-7aac-4b65-8dc1-2ba735383f9e", name: "Striped top", description: "", category: "Tops", price: 45, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-top.png"},
    { tag: "dealsProducts_1", articleNumber: "1920e1c5-c1c9-41b9-a485-1384972474eb", name: "Striped pink pants", description: "", category: "Pants", price: 36, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-pants.png"},
    { tag: "dealsProducts_1", articleNumber: "dbb4a5f2-be55-4931-b19e-54db48bc752a", name: "White seater", description: "", category: "Sweaters", price: 25, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/white-sweater.png"},
    { tag: "", articleNumber: "684a9d63-c7e2-446b-99df-eafdd31426b1", name: "Winter boots", description: "", category: "Shoes", price: 85, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/winter-boots.png"}
]
module.exports = products

const products2 = [
    { name: "Black coat", description: "", price: 95, category: "Coats", tag: "featuredProducts", imageName: "https://win22imgstorage.blob.core.windows.net/images/black-coat.png", rating: 4 },
    { name: "Black dress", description: "", price: 88, category: "Dresses",  tag: "featuredProducts", imageName: "https://win22imgstorage.blob.core.windows.net/images/black-dress.png", rating: 5 },
    { name: "Black top & pants set", description: "", price: 107, category: "Sets", tag: "featuredProducts", imageName: "https://win22imgstorage.blob.core.windows.net/images/black-set.png", rating: 3 }, 
    { name: "White top & black pants set", description: "", price: 115, category: "Sets", tag: "featuredProducts", imageName: "https://win22imgstorage.blob.core.windows.net/images/black-white-set.png", rating: 2 },
    { name: "Blue jacket", description: "", price: 299, category: "Jackets", tag: "featuredProducts", imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png", rating: 5 },
    { name: "Blue hoody & pants", description: "", price: 150, category: "Sets", tag: "featuredProducts", imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-set.png", rating: 5 },
    { name: "Blue t-shirt", description: "", price: 25, category: "T-Shirts", tag: "featuredProducts", imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png", rating: 5 },
    { name: "Brown sweater", description: "", price: 35, category: "Sweaters", tag: "featuredProducts", imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png", rating: 4 },
    { name: "Brown watch", description: "", price: 150, category: "Watches", tag: "dealsProducts_1", imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-watch.png", rating: 3 },
    { name: "Stiletto shoes", description: "", price: 89, category: "Shoes", tag: "dealsProducts_1", imageName: "https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png", rating: 3},
    { name: "Gray t-shirt", description: "", price: 15, category: "T-Shirts", tag: "dealsProducts_1", imageName: "https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png", rating: 3 },
    { name: "Jeans dress", description: "", price: 55, category: "Jeans", tag: "dealsProducts_1", imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png", rating: 4 },
    { name: "Jeans jacket & pants", description: "", price: 110, category: "Sets", tag: "dealsProducts_2",imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-set.png", rating: 4 },
    { name: "Olive sweater", description: "", price: 19, category: "Sweaters", tag: "dealsProducts_2", imageName: "https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png", rating: 2 },
    { name: "Multicolor t-shirt", description: "", price: 25, category: "T-shirts", tag: "dealsProducts_2", imageName: "https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png", rating: 2 },
    { name: "Purple handbag", description: "", price: 99, category: "Bags", tag: "dealsProducts_2", imageName: "https://win22imgstorage.blob.core.windows.net/images/purple-bag.png", rating: 5 },
    { name: "Red handbag", description: "", price: 105, category: "Bags", tag: "", imageName: "https://win22imgstorage.blob.core.windows.net/images/red-bag.png", rating: 5 },
    { name: "Red dress", description: "", price: 67, category: "Dresses", tag: "", imageName: "https://win22imgstorage.blob.core.windows.net/images/red-dress.png", rating: 3 },
    { name: "Striped top", description: "", price: 45, category: "Tops", tag: "", imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-top.png", rating: 4 },
    { name: "Striped pink pants", description: "", price: 36, category: "Pants", tag: "", imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-pants.png", rating: 2 },
    { name: "White seater", description: "", price: 25, category: "Sweaters", tag: "", imageName: "https://win22imgstorage.blob.core.windows.net/images/white-sweater.png", rating: 2 },
    { name: "Winter boots", description: "", price: 85, category: "Shoes", tag: "", imageName: "https://win22imgstorage.blob.core.windows.net/images/winter-boots.png", rating: 2 }
]
