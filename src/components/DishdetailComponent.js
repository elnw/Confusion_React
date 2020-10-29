import React from 'react';
import { row } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link} from 'react-router-dom';
import  CommentForm from './CommentFormComponent.js';


const DishDetail= (props)=>{
		if(props.dish == null){
			return(
				<div></div>
			);
		}else{
			return(
			<div className="row">
				
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/menu">Menu</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>
						{props.dish.name}
					</BreadcrumbItem>
				</Breadcrumb>
					
					
				<div className="col-12 col-sm-12 col-md-5 m-1">
					<RenderDish dish={props.dish} />
				</div>
				<div className="col-12 col-sm-12 col-md-5 m-1">
					<h4>Comments</h4>
					<div>
						<RenderComments comments={props.comments} />	
					</div>
				</div>
			</div>
		);
		}	
		
	}
	
	function RenderDish({dish}){
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
	
	function RenderComments({comments}){
		
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
					<CommentForm />
				</ul>
			</div>
		);
		}else{
			return(
			<CommentForm />);
		}
	}

export default DishDetail;