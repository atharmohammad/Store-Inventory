import React , {useState} from 'react'
import { View , Text , StyleSheet} from 'react-native'
import { Input } from 'react-native-elements'
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
                setDate(date)
              }}
            />
          </View>
          <View style={styles.expense}>
            <Text>Expense</Text>
            <Input
              value={amount}
              style={styles.expenseInput}
              onChangeValue={setAmount}
           />
          </View>
        </View>
        <Input placeholder="Name" />
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    zIndex: 100,
    opacity: 0.8,
    flex: 1,
  },
  title: {
    backgroundColor: "#f58a42",
    textAlign: "center",
    color: "#fff",
    marginBottom: 10,
  },
  date: {
    display: "flex",
    width: "60%",
  },
  topBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  expense: {
    width: "25%",
  },
  expenseInput: { 
        height: "24%",
        borderWidth:2,
        borderColor:'black',
        marginTop:5
    },
    dateInput:{
        borderWidth:2,
        borderColor:'black',
        marginTop:5
    }
});