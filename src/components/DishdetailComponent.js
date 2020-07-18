import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function RenderDish({dish}){
        return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        );
    }
    function RenderComments({comments}){
        if(comments.length){
            return(<div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                   {comments.map((comment)=>{
                    return(
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}, {comment.date}</p>
                        </li>
                    );
                })}
                </ul>
                </div>);
        }else{
            return( <div></div>);
        }
    }

    const  DishDetail = (props) => {
        const elementkey= 'dishdetail';
        const dish = props.dish;
        if (dish != null)
            return(
                <div className="container" key={elementkey}>                
                <div className="row" >
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish}/> 
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={dish.comments}/>
                    </div>
                </div>
                </div>


            );
        else return(
                <div></div>
            );
    };

export default DishDetail;