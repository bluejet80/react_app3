import "./category-menu.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoryMenu = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      link: "/hats",
      bgImage: "./img/hats2.jpeg",
      alt: "hats",
    },
    {
      id: 2,
      title: "Jackets",
      link: "/jackets",
      bgImage: "/img/jackets1.jpeg",
      alt: "jackets",
    },
    {
      id: 3,
      title: "Sneakers",
      link: "/sneakers",
      bgImage: "/img/sneakers1.jpeg",
      alt: "sneakers",
    },
    {
      id: 4,
      title: "Womens",
      link: "/womens",
      bgImage: "/img/women2.jpeg",
      alt: "womens",
    },
    {
      id: 5,
      title: "Mens",
      link: "/mens",
      bgImage: "/img/mens2.jpeg",
      alt: "mens",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem category={item} key={item.id} />
      ))}
    </div>
  );
};

export default CategoryMenu;
