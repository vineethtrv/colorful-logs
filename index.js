/**
Colorful console logs
**/ 


class Log {
    padding = "3px 5px";
    borderWidth = "1px";
    xlFontSize = "32px";
    largeFontSize = "28px";
    mediumFontSize = "24px";
    smallFontSize = "12px";
    infoStyle = {
        color: "#055160",
        background: "#cff4fc",
        borderColor: "#b6effb",
        borderWidth: this.borderWidth,
        padding: this.padding
    }
    warnStyle = {
        color: "#664d03",
        background: "#fff3cd",
        borderColor: "#ffecb5",
        borderWidth: this.borderWidth,
        padding: this.padding
    }
    errorStyle = {
        color: "#842029",
        background: "#f8d7da",
        borderColor: "#f5c2c7",
        borderWidth: this.borderWidth,
        padding: this.padding
    }
    successStyle = {
        color: "#0f5132",
        background: "#d1e7dd",
        borderColor: "#badbcc",
        borderWidth: this.borderWidth,
        padding: this.padding
    }

    constructor() {}


    // Information
    info(data){
        console.log(
            `%c${data}`,
            this.generateStyles(this.infoStyle)
        );
    }

    // Error
    error(data){
        console.log(
            `%c${data}`,
            this.generateStyles(this.errorStyle)
        );
    }

    // success
    error(data){
        console.log(
            `%c${data}`,
            this.generateStyles(this.errorStyle)
        );
    }

    // warning
    warn(data){
        console.log(
            `%c${data}`,
            this.generateStyles(this.warnStyle)
        );
    }
    // Success
    success(data){
       return console.log(
            `%c${data}`,
            this.generateStyles(this.successStyle)
        );
    }

    // Font size
    xl(data){
        console.log(
            `%c${data}`,
            `font-size: ${this.xlFontSize};
            font-weight: 800;
            display: block;`
        );
    }
    large(data){
        console.log(
            `%c${data}`,
            `font-size: ${this.largeFontSize};
            font-weight: 700;
            display: block;`
        );
    }
    medium(data){
        console.log(
            `%c${data}`,
            `font-size: ${this.mediumFontSize};
            font-weight: 600;
            display: block;`
        );
    }
    small(data){
        console.log(
            `%c${data}`,
            `font-size: ${this.small};
            display: block;`
        );
    }
    color(data, color){
        console.log(
            `%c${data}`,
            `color: ${color};
            display: block;`
        );
    }


    // Generate styles for logs 
    generateStyles(logStyles){
        return `background: ${logStyles.background}; 
            color: ${logStyles.color};
            border: ${logStyles.borderWidth} solid ${logStyles.borderColor};
            padding: ${logStyles.padding};
            display: block;`
        ;
    }
}


export const log = new Log;
