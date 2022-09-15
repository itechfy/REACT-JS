import './categories.styles.scss';
import CategoryItem from '../category/category.component';
const Categories = ({categories})=>{
    return(
        <div>
            <div className='hero'>
            <h1 className='landing-title'>Welcome to Nike</h1>
            <p>Bringing you the elite fashion outlets to nail out there. </p>
            <div style={{
                backgroundImage:`url('../../assets/icons8-nike.svg')`
            }}>
            </div>
            </div>
        <div className="categories-container">
  { 
  categories.map((category)=>(
      <CategoryItem key={category.id} category={category} />
  ))
  }
   

    </div>
    </div>
    );
}

export default Categories;