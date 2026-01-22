new VTTCue({
    el:'#feedback-container',
    data:{
        feedback:'',
        submitted: false
    },
    methods: {
        submitFeedback(){
            console.log('Feedback:', this.feedback);

            this.feedback='';
            this.submitted=true;
        }
    }
});