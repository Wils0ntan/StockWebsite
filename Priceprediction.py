import yfinance as yf


#check price
def price_check():
    ticker_input = input("What stock you wanna check: ")
    def get_current_price(ticker_input):
     ticker = yf.Ticker(ticker_input)
     todays_data = ticker.history(period='1d')
     return todays_data['Close'][0]

    print(get_current_price(ticker_input))

#What i stopped at
def what_i_stopped():
    Largestop = ""
    Midstop = "start"
    print("Large is:",Largestop)
    print("Mid is:",Midstop)

#what i stopped at edit
def what_i_stopped_edit():


#creating a watchlist
def watchlist():
    Watchlist = ["LLY, AIG, BHP, RIO, STLD"]
    Getreadylist = ["HEI", "TTE"]
    Sellsoon = []

    print("Watchlist: " ,Watchlist)
    print("Get ready list: " ,Getreadylist)
    print("Sell soon list: " ,Sellsoon)
#DASHBOARDDDDDDDDDDDDD
def Dashboard():

    def win_function():
     Winners = {
        "META": 47.40,
        "UNH": 19.86,
        "APP": 21.55,
        "NVO": 50,
        "APPF": 15,
        "GSK": 9.04,
        "AVGO": 89,
        "JHX": 12.88,
        "NGG": 13.56,
        "COST": 21,
        "DAVA": 33.63,
        "CRS": 10,
        "QLYS": 9,
        "V": 8,
        "PWR": 5.90,
        "LLY": 61,
        "META2": 18,
        "EFX": 9,
        "ABCL": 13,
     }

     win_sum = sum(Winners.values())
     return win_sum


    def loser_function():
       Loser = {
        "FDX": 37.81,
        "JKHY": 27,
        "MUSA": 8,
        "NXPI": 7,
        "RS": 12,
        "BRKR": 7,
        "ECL": 18,
    }
       print(Loser)
       lose_sum = sum(Loser.values())
       print(lose_sum)



    def open_function():
       Open = ["DINO", "THG", "EXLS", "NEGG", "PG", "SEDG", "CW"]
       print(Open)


    dash_check = input("w for win, l for lose or o for open?: ")
    if dash_check == "w":
        win_function()
    if dash_check == "l":
        loser_function()
    if dash_check == "o":
        open_function()




#MENU


Menu = input("What do you wanna check\n type s for what i stopped at\n type w for watch list\n type d for dashboard\n type c to check stock: ")
if Menu == "s":
    what_i_stopped()
elif Menu == "w":
    watchlist()
elif Menu == "d":
    Dashboard()
elif Menu == "c":
    price_check()



