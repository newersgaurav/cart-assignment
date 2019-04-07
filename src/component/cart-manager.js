import React, { Component } from 'react';
import ErrorLimit from './error';
import CartTotal from './cart-total';
import AddItem from './add-item';
import Cart from './cart';
import './cart-manager.css';

class CartManager extends Component{
	constructor(){
		super();
		this.state = {
			items: [
			        {
			          name: "mango",
			          quantity: 2,
			          price: 30,
			          index: 0
			        },
			        {
			          name: "orange",
			          quantity: 1,
			          price: 35,
			          index: 1
			        },
			        {
			          name: "Apple",
			          quantity: 4,
			          price: 50,
			          index: 2
			        }
			      ]
		}
	}

	handleSubstract = index => {
		const newItem = this.state.items.map(ele => {
			if(ele.index === index){
				ele.quantity = ele.quantity - 1;
				return ele;
			}
			return ele;
		});

		this.setState({
			items : newItem
		});
	}

	handleAdd = index => {
		const newItem = this.state.items.map(ele => {
			if(ele.index === index){
				ele.quantity = ele.quantity + 1;
				return ele;
			}
			return ele;
		});

		this.setState({
			items : newItem
		});
	}

	removeItem = index => {
		const newItem = this.state.items.filter(ele => {
			if(ele.index !== index){
				return ele;
			}
		});

		this.setState({
			items : newItem
		});
	}

	handleAddItem = (e,item) => {
		e.preventDefault();
		let findItem = () => {
			let index = -1;
			this.state.items.forEach(ele => {
				if(ele.name === item.name){
					index = ele.index;
				}
			});
			return index;
		};

		let findIndex = findItem();
		let newItem = this.state.items.slice();
		if(findIndex === -1){
			item['index'] = this.state.items.length;
			item['quantity'] = 1;
			newItem.push(item);
			this.setState({
				items : newItem
			});
		}
		else{
			newItem[findIndex].quantity += 1;
			newItem[findIndex].price = item.price;
			this.setState({
				items : newItem
			});
		}
	}

	getTotal() {
	    let total = this.state.items.reduce(
	      (accumulator, element) => accumulator + element.price * element.quantity,
	      0
	    );
	    return total;
	}

	render(){
		return(
			<div>
        <ErrorLimit>
          <AddItem handleAddItem={this.handleAddItem} />
        </ErrorLimit>
        <table>
          <tbody>
            <tr>
              <th>Fruits</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Substract</th>
              <th>Add</th>
              <th>Delete</th>
            </tr>

            {this.state.items.map((item, index) => {
              return (
                <Cart
                  data={item}
                  handleMinus={this.handleSubstract}
                  handlePlus={this.handleAdd}
                  handleTrash={this.removeItem}
                  key={index}
                />
              );
            })}
          </tbody>
        </table>
        <ErrorLimit>
          <CartTotal total={this.getTotal()} />
        </ErrorLimit>
      </div>
		)
		
	}
}

export default CartManager;