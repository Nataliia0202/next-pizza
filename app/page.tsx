import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from "@/components/shared";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className=" mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* { Фильтрация} */}

          <div className="w-[250px]">
            <Filters />
          </div>

          {/* /* {Список товаров} */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
              title={"Pizzas"} 
              items={[
                {
                  id:1,
                  name: 'Cheese sauce',
                  imageUrl: "https://media.istockphoto.com/id/1413684626/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-%D1%81-%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D0%BE%D0%BC%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=8s9XzBQNFdHBZPxzukGFXNk5jICoBrEb5wA0TZ3vfgk=", 
                  price: 50,
                  items:[{price: 50}]
                },
                {
                  id:2,
                  name: 'Cheese sauce',
                  imageUrl: "https://media.istockphoto.com/id/1413684626/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-%D1%81-%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D0%BE%D0%BC%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=8s9XzBQNFdHBZPxzukGFXNk5jICoBrEb5wA0TZ3vfgk=", 
                  price: 50,
                  items:[{price: 50}]
                },
                {
                  id:3,
                  name: 'Cheese sauce',
                  imageUrl: "https://media.istockphoto.com/id/1413684626/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-%D1%81-%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D0%BE%D0%BC%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=8s9XzBQNFdHBZPxzukGFXNk5jICoBrEb5wA0TZ3vfgk=", 
                  price: 50,
                  items:[{price: 50}]
                },
                {
                  id:4,
                  name: 'Cheese sauce',
                  imageUrl: "https://media.istockphoto.com/id/1413684626/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-%D1%81-%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D0%BE%D0%BC%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=8s9XzBQNFdHBZPxzukGFXNk5jICoBrEb5wA0TZ3vfgk=", 
                  price: 50,
                  items:[{price: 50}]
                },
                {
                  id:5,
                  name: 'Cheese sauce',
                  imageUrl: "https://media.istockphoto.com/id/1413684626/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-%D1%81-%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D0%BE%D0%BC%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=8s9XzBQNFdHBZPxzukGFXNk5jICoBrEb5wA0TZ3vfgk=", 
                  price: 50,
                  items:[{price: 50}]
                }
              ]} 
              categoryId={1}/>

<ProductsGroupList 
              title={"Combo"} 
              items={[
                {
                  id:1,
                  name: 'Cheese sauce',
                  imageUrl: "https://media.istockphoto.com/id/1413684626/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-%D1%81-%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D0%BE%D0%BC%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=8s9XzBQNFdHBZPxzukGFXNk5jICoBrEb5wA0TZ3vfgk=", 
                  price: 50,
                  items:[{price: 50}]
                },
                {
                  id:2,
                  name: 'Cheese sauce',
                  imageUrl: "https://media.istockphoto.com/id/1413684626/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-%D1%81-%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D0%BE%D0%BC%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=8s9XzBQNFdHBZPxzukGFXNk5jICoBrEb5wA0TZ3vfgk=", 
                  price: 50,
                  items:[{price: 50}]
                },
                {
                  id:3,
                  name: 'Cheese sauce',
                  imageUrl: "https://media.istockphoto.com/id/1413684626/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-%D1%81-%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D0%BE%D0%BC%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=8s9XzBQNFdHBZPxzukGFXNk5jICoBrEb5wA0TZ3vfgk=", 
                  price: 50,
                  items:[{price: 50}]
                },
                {
                  id:4,
                  name: 'Cheese sauce',
                  imageUrl: "https://media.istockphoto.com/id/1413684626/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-%D1%81-%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D0%BE%D0%BC%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=8s9XzBQNFdHBZPxzukGFXNk5jICoBrEb5wA0TZ3vfgk=", 
                  price: 50,
                  items:[{price: 50}]
                },
                {
                  id:5,
                  name: 'Cheese sauce',
                  imageUrl: "https://media.istockphoto.com/id/1413684626/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8-%D1%81-%D0%BD%D0%B0%D1%80%D0%B5%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BB%D0%BE%D0%BC%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC.jpg?s=612x612&w=0&k=20&c=8s9XzBQNFdHBZPxzukGFXNk5jICoBrEb5wA0TZ3vfgk=", 
                  price: 50,
                  items:[{price: 50}]
                }
              ]} 
              categoryId={2}/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
