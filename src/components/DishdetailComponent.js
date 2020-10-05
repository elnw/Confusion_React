import React, { Component } from 'react';
import { row } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
class DishDetail extends Component{
	render(){
		if(this.props.dish == null){
			return(
				<div></div>
			);
		}else{
			return(
			<div className="row">
				<div className="col-12 col-sm-12 col-md-5 m-1">
					{this.renderDish(this.props.dish)}
				</div>
				<div className="col-12 col-sm-12 col-md-5 m-1">
					<h4>Comments</h4>
					<div>
						<p>{this.renderComments(this.props.dish.comments)}</p>
							
					</div>
				</div>
			</div>
		);
		}	
		
	}
	
	renderDish(dish){
		if(dish != null){
		return (
			<Card>
				<CardImg width="100%" src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
		}else{
			return(
				<div>				
				</div>
			);
		}
	}
	
	renderComments(comments){
		
		if(comments != null){
			const listaComentarios = comments.map((comment) =>{
			return(
				<div key={comment.id}>
					<li>{comment.comment}</li>
					<li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </li>
				</div>
			);
		});
		
		return(
			<div>
				<ul className="list-unstyled">
					<div>
						{listaComentarios}
					</div>
				</ul>
			</div>
		);
		}else{
			return(
			<div></div>);
		}
	}
}
export default DishDetail;