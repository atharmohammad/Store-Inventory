import React , {useState} from 'react'
import { View , Text , StyleSheet,TouchableOpacity} from 'react-native'
import { Input,Icon } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'



export default function AddExpense(props){

    const [amount,setAmount] = useState(0);
    const [date,setDate] = useState(new Date());

    return (
      <View style={styles.header}>
        <Text style={styles.title}>Add Expense</Text>
        <View style={styles.topBox}>
          <View style={styles.date}>
            <Text>Date</Text>
            <DatePicker
              style={styles.dateInput}
              date={date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
              }}
            />
          </View>
          <Icon
            type="ionicon"
            name="wallet"
            color="orange"
            size={40}
            style={{ marginTop: 25 }}
          />
          <View style={styles.expense}>
            <Text style={{ textAlign: "center" }}>Amount</Text>
            <Input
              value={amount}
              keyboardType="numeric"
              style={styles.expenseInput}
              onChangeValue={setAmount}
            />
          </View>
        </View>
        <View style={styles.bottomBox}>
          <Icon type="ionicon" name="text" color="orange" size={35} />
          <Input placeholder="Name" style={styles.nameInput} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Expenses")}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Done</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    zIndex: 100,
    opacity: 0.8,
    flex: 1,
    backgroundColor:'#fff'
  },
  title: {
    backgroundColor: "#f58a42",
    textAlign: "center",
    color: "#fff",
    marginBottom: 10,
  },
  date: {
    display: "flex",
    width: "48%",
  },
  topBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor:'white'
  },
  expense: {
    width: "35%",
  },
  expenseInput: { 
        borderWidth:2,
        borderColor:'black',
        marginTop:5,
        padding:5
    },
    dateInput:{
        borderWidth:2,
        borderColor:'black',
        marginTop:5
    },
    nameInput:{
      borderWidth:2,
      borderColor:'black',
      paddingHorizontal:4,
    },
    bottomBox:{
      display:'flex',
      flexDirection:'row',
      marginRight:'13%',
      marginLeft:'2%'
    },
    button:{
      backgroundColor:'#f58a42',
      padding:10,
      alignSelf:'flex-end',
      marginRight:21,
      borderRadius:10
    }
});