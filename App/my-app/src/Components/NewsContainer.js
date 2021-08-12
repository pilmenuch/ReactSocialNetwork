
import {connect} from "react-redux";
import News from "./News";
import {addNewComment, updateNewsComment} from "../redux/news-reducer";
import {compose} from "redux";



let mapStateToProps=(state)=>{
    return{
        newsPage: state.newsPage
    }
};



export default compose(connect(mapStateToProps,{addNewComment,updateNewsComment}))(News);


