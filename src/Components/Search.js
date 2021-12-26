import React,{forwardRef} from 'react';

const Search  = forwardRef((props,ref) => {
    const {onFormSubmit} = props
	const onSubmit = (e) => {
		e.preventDefault();
		let username = ref.current.value.trim();
		if(!username){
			alert('Please enter a username');
			return;
		}
		onFormSubmit(username);
		ref.current.value = '';
	}


    return(
        <div className="searchBlock">
            <form onSubmit={onSubmit}>
                <label>Search Github Users</label>
                <input type="text" ref={ref} className="form-control" />
            </form>
        </div>
    )
	
})

export default Search