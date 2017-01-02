class Modal extends Component{
    render(){
        return (
                <!-- Modal -->
            <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
            <div class="jumbotron">
            <h2>Authentication</h2>

            <p>Login or Register with:</p>

        <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
        <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
        <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>
        <a href="/auth/twitter" class="btn btn-info"><span class="fa fa-twitter"></span> Twitter</a>
        <a href="/auth/google" class="btn btn-danger"><span class="fa fa-google-plus"></span> Google+</a>
        </div>

        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
            </div>

            </div>
        )
    }
}