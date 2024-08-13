import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className=" mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* { Фильтрация} */}

          <div className="w-[250px]">
            <Filters />
          </div>

          {/* /* {Список товаров} */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">List product</div>
          </div>
        </div>
      </Container>
    </>
  );
}
