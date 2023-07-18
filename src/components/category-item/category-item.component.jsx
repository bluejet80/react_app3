import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  return (
    <div className="category-container">
      <img
        src={category.bgImage}
        alt={category.alt}
        className="background-image"
      ></img>
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
