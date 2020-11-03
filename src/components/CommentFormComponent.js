import React, {Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Label, Col, Row} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
	
	constructor(props){
		super(props);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			isModalOpen: false
		};
	}
	
	toggleModal(){
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}
	
	handleSubmit(values){
		this.toggleModal();
		this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
		
	}
	
	render(){
		var stars = [];
		for (var i = 1; i <= 5; i++) {
  			stars.push(<option value={i}>{i}</option>);
		}
		
		return(
		<div className="mt-2">
			<Button outline onClick={this.toggleModal}>
				<span className="fa fa-edit fa-lg"></span> Submit Comment
			</Button>
				
				
			<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
				<ModalHeader>
					Submit Comment
				</ModalHeader>
				
				<ModalBody>
					<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
						<Row className="form-group">
							<Label htmlFor="author" md={2}>Author</Label>
							<Col md={10}>
								<Control.text model=".author" id="author" name="author"
                                        placeholder="Author"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                />
								<Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
							</Col>
						</Row>
						<Row className="form-group">
							<Label htmlFor="rating" md={2}>Rating</Label>
							<Col md={10}>
								<Control.select model=".rating" id="rating" name="rating"
                                        placeholder="Rating"
                                        className="form-control"
									>
								{stars}
								
								</Control.select>
							</Col>
						</Row>
						<Row className="form-group">
							<Label htmlFor="comment" md={2}>Comment</Label>
							<Col md={10}>
								<Control.textarea model=".comment" id="comment" 
										name="comment"
										rows="6"
                                        placeholder="Comment"
                                        className="form-control"
                                />
							</Col>
						</Row>
						<Button type="submit" value="submit" color="primary">
							Submit
						</Button>
					</LocalForm>
				
				</ModalBody>
				
			</Modal>
			
		</div>);
		
	}
}

export default CommentForm;