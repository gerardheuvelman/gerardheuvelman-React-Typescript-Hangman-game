const HEAD = (
    <div style={{
        height: "50px",
        width: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: 50,
        right: -30
    }}></div>
)

const BODY = (
    <div style={{
        height: "100px",
        width: "10px",
        background: "black",
        position: "absolute",
        top: 120,
        right: 0
    }}></div>
)

const RIGHT_ARM = (
    <div style={{
        height: "10px",
        width: "100px",
        background: "black",
        position: "absolute",
        top: 150,
        right: -100,
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }}></div>
)

const LEFT_ARM = (
    <div style={{
        height: "10px",
        width: "100px",
        background: "black",
        position: "absolute",
        top: 150,
        right: 10,
        rotate: "30deg",
        transformOrigin: "right bottom"
    }}></div>
)

const RIGHT_LEG = (
    <div style={{
        height: "10px",
        width: "100px",
        background: "black",
        position: "absolute",
        top: 210,
        right: -90,
        rotate: "60deg",
        transformOrigin: "left bottom"
    }}></div>
)

const LEFT_LEG = (
    <div style={{
        height: "10px",
        width: "100px",
        background: "black",
        position: "absolute",
        top: 210,
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }}></div>
)

const BODY_PARTS:any[] = [
    HEAD,
    BODY,
    RIGHT_ARM,
    LEFT_ARM,
    RIGHT_LEG,
    LEFT_LEG
]


type HangmanDrawingProps = {
    numberOfGuesses: number
}


export function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps) {
    return (
        <div style={{ position: "relative" }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{
                height: "50px",
                width: "10px",
                background: "black",
                position: "absolute",
                top: 0,
                right: 0
            }}></div>
            <div style={{
                height: "10px",
                width: "200px",
                background: "black",
                marginLeft: "120px"
            }}></div>
            <div style={{
                height: "400px",
                width: "10px",
                background: "black",
                marginLeft: "120px"
            }}></div>
            <div style={{
                height: "10px",
                width: "250px",
                background: "black"
            }}></div>
        </div>
    )
}