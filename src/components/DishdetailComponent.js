import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link} from 'react-router-dom';
import  CommentForm from './CommentFormComponent.js';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../Shared/BaseURL';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const DishDetail= (props)=>{
	if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null){
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
						<RenderComments comments={props.comments} postComment={ props.postComment}
							dishId={ props.dish.id}/>	
					</div>
				</div>
			</div>
		);
		}else{
			return(
				<div></div>
			);
		}
		
	}
	
	function RenderDish({dish}){
		if(dish != null){
		return (
			<FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
		);
		}else{
			return(
				<div>
				</div>
			);
		}
	}
	
	function RenderComments({comments, postComment, dishId}) {
		
		if(comments != null){
			const listaComentarios = comments.map((comment) =>{
			return(
				<Fade in>
				<li key={comment.id}>
					<p>{comment.comment}</p>
					<p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
				</li>
				</Fade>
			);
		});
			
			 
		
		return(
			<div>
				<ul className="list-unstyled">
					<div>
						<Stagger in>
						{listaComentarios}
						</Stagger>
					</div>
					<CommentForm dishId={dishId} postComment={postComment} />
				</ul>
				
			</div>
		);
		}else{
			return(
			<CommentForm dishId={ dishId} postComment={ postComment}  />);
		}
	}

export default DishDetail;