import React from "react";
import {Card ,CardImg ,CardTitle ,CardBody , CardText , CardSubtitle} from 'reactstrap';
import { Loading } from "./LoadingComponent";


function RenderCard ({item , isLoading , errMess}){
    
        if(isLoading){
            return(
                <Loading/>
            );
        }
        else if(errMess){
            return(
                {errMess}
            );
        }
        else
            return(
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle><b>{item.designation}</b> </CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
    );
}

function Home(props) {
    return(
        <div className ="container">
           <div className="row align-items-start">
               <div className = "col-12 col-md m-1">
                   <RenderCard item={props.dish}
                        isLoading={props.dishesLoading}
                        errMess = {props.dishesErrmess} />
               </div>
               <div className = "col-12 col-md m-1">
                   <RenderCard item={props.promotion} />
               </div>
               <div className = "col-12 col-md m-1">
                   <RenderCard item={props.leader} />
               </div>
           </div>
        </div>
    );
}

export default Home;