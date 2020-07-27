# Price Formatter UI
This project uses ReactJS with Material UI and Recoil
## Setup
Running from your local against the Price Formatter App Java server
1. Run `npm install`
2. Add `"proxy":""http://localhost:8080"` to solve CORS issues, 
dont forget to remove it when you bundle this along 
with the Java API Application
3. Run `npm start`
## Sample GUI
![sample](https://github.com/jesus-dayo/priceformatter-ui/blob/master/sample-ui.png?raw=true)

## Build As Monolith
1. To build the Java App along with this UI , run `mvn package` on the 
Price Formatter App
