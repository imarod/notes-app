import React from 'react'

class NoteInput extends React.Component {
    constructor(props){
        super(props)

        this.state={
            title:'',
            body:'',
            maxTitleChar: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        const title = event.target.value;
        if (title.length <= this.state.maxTitleChar){
            this.setState(()=>{
                return{
                    title: event.target.value,
                }
            })
            
        }
        
    }
    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body: event.target.value,
            }
        })
        

    }
    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            body: '',
          });
    }


    render() {
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">
                        Sisa karakter: {this.state.maxTitleChar - this.state.title.length}
                    </p>
                    <input 
                    className="note-input__title" 
                    type="text"
                    placeholder="ini adalah judul..."
                    value={this.state.title} 
                    onChange={this.onTitleChangeEventHandler} />
                    <textarea 
                    className="note-input__body" 
                    type="text"
                    placeholder="Tuliskan catatanmu disini..."
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}></textarea> 

                    <button type='submit'>Buat</button>
                </form>
            </div>

        )
    }
}


export default NoteInput
