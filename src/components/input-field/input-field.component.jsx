import './input-field.styles.scss';
const FormInput = ({label,...otherProps})=>{
   return( 
    <div className="group">
        <input className="form-input" {...otherProps}/>
        { 
        // if label exists then render label by && (conditional rendering)
        label && (
            <label htmlFor="name" className={`${otherProps.value.length?'shrink':''} form-input-label`}>{label}</label>
         )
         }
      
    </div>
    );
    }
    
export default FormInput;


/* can be used as other props
 type="text" id="name" name="displayName" onChange={handleChange} value={displayName} required 
*/