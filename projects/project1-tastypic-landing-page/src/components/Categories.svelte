<script>
  const menuItems = [
    {
      id: 1,
      imgUrl: "assets/burger-1.png",
      name: "Cheese Burger",
      price: "₹179.00",
      type: "burger",
    },
    {
      id: 2,
      imgUrl: "assets/burger-2.png",
      name: "Veg Burger",
      price: "₹100.00",
      type: "burger",
    },
    {
      id: 3,
      imgUrl: "assets/burger-3.png",
      name: "Non-Veg Burger",
      price: "₹149.00",
      type: "burger",
    },
    {
      id: 4,
      imgUrl: "assets/burger-4.png",
      name: "Mushroom Burger",
      price: "₹299.00",
      type: "burger",
    },
    {
      id: 5,
      imgUrl: "assets/burger-5.png",
      name: "Bean Burger",
      price: "₹199.00",
      type: "burger",
    },
    {
      id: 6,
      imgUrl: "assets/snack-1.png",
      name: "Crackers",
      price: "₹199.00",
      type: "snack",
    },
    {
      id: 7,
      imgUrl: "assets/snack-2.png",
      name: "French fries",
      price: "₹199.00",
      type: "snack",
    },
    {
      id: 8,
      imgUrl: "assets/snack-3.png",
      name: "Sandwich",
      price: "₹199.00",
      type: "snack",
    },
    {
      id: 9,
      imgUrl: "assets/snack-4.png",
      name: "Chips",
      price: "₹199.00",
      type: "snack",
    },
    {
      id: 10,
      imgUrl: "assets/snack-5.png",
      name: "French Fries",
      price: "₹199.00",
      type: "snack",
    },
    {
      id: 12,
      imgUrl: "assets/beverage-2.png",
      name: "Melon Juice",
      price: "₹199.00",
      type: "beverage",
    },
    {
      id: 13,
      imgUrl: "assets/beverage-3.png",
      name: "Ice Cream",
      price: "₹199.00",
      type: "beverage",
    },
    {
      id: 15,
      imgUrl: "assets/beverage-5.png",
      name: "Apple Juice",
      price: "₹199.00",
      type: "beverage",
    },
  ];

  let filteredItems = [...menuItems];
  let selectedCategory = "all";

  const getFilteredItems = (query) => {
    selectedCategory = query;
    if (query == "all") {
      return (filteredItems = [...menuItems]);
    }
    return (filteredItems = menuItems.filter((item) => {
      return item.type == query;
    }));
  };

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  shuffleArray(filteredItems);
</script>

<section id="dishes" class="container py-4 px-5">
  <div class="flex flex-col items-center justify-center gap-5">
    <h2
      class="text-base font-montserrat font-bold border-b-2 border-solid border-primaryColorLight px-4"
    >
      Dishes
    </h2>
    <h3 class="font-oswald text-3xl text-primaryColor">Customer Favourites</h3>
  </div>
  <div id="tabs_wrap" class="gap-10">
    <ul class="flex flex-wrap gap-3 py-10 justify-center">
      <li
        on:click={() => {
          getFilteredItems("all");
        }}
        class={` ${selectedCategory=="all" ? "active"  : " "}  inline-block text-base py-3 px-6 bg-primaryColor text-whiteColor rounded-lg capitalize font-oswald
          cursor-pointer border-2 border-transparent
          hover:border-primaryColor
          hover:bg-transparent
          hover:text-primaryColor
          duration-200
          ease-linear`}
      >
        All
      </li>
      <li
        on:click={() => {
          getFilteredItems("burger");
        }}
        class={` ${selectedCategory=="burger" ? "active"  : " "}  inline-block text-base py-3 px-6 bg-primaryColor text-whiteColor rounded-lg capitalize font-oswald
        cursor-pointer border-2 border-transparent
        hover:border-primaryColor
        hover:bg-transparent
        hover:text-primaryColor
        duration-200
        ease-linear`}
      >
        Food
      </li>
      <li
        on:click={() => {
          getFilteredItems("snack");
        }}
        class={` ${selectedCategory=="snack" ? "active"  : " "}  inline-block text-base py-3 px-6 bg-primaryColor text-whiteColor rounded-lg capitalize font-oswald
        cursor-pointer border-2 border-transparent
        hover:border-primaryColor
        hover:bg-transparent
        hover:text-primaryColor
        duration-200
        ease-linear`}
      >
        Snacks
      </li>
      <li
        on:click={() => {
          getFilteredItems("beverage");
        }}
        class={` ${selectedCategory=="beverage" ? "active"  : " "}  inline-block text-base py-3 px-6 bg-primaryColor text-whiteColor rounded-lg capitalize font-oswald
        cursor-pointer border-2 border-transparent
        hover:border-primaryColor
        hover:bg-transparent
        hover:text-primaryColor
        duration-200
        ease-linear`}
      >
        Beverages
      </li>
    </ul>
  </div>
  <div>
    <ul
      id="menu-items"
      class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12"
    >
      {#each filteredItems as item, index (item.id)}
        <li>
          <div
            class="h-56 grid place-items-center bg-primaryColor rounded-3xl hover:bg-primaryColorLight ease-linear duration-200 lg:h-40 cursor-pointer"
          >
            <img
              src={`${item.imgUrl}`}
              alt="food image"
              class="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
            />
          </div>

          <div class="mt-3">
            <h4
              class="text-2xl text-black uppercase font-bold font-oswald tracking-wider"
            >
              {item.name}
            </h4>
            <p class="text-primaryColor text-lg mt-3">{item.price}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .active {
    background: transparent;
    border-color: rgb(255, 142, 9);
    color: rgb(255, 142, 9);
  }
</style>
