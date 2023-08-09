import {
  Text,
  Box
} from "@chakra-ui/react";
import { React } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./customReport.css";

function formsSalesReport(props) {
  const { reportStartDate, reportEndDate, valueStartDate, valueEndDate } = props;

  return (
    <>
      <Box mb={"20px"}>
        <Text>Start Date</Text>
        <DatePicker
          selected={valueStartDate}
          onChange={(date) => reportStartDate(date)}
          selectsStart
          startDate={valueStartDate}
          endDate={valueEndDate}
          isClearable
          placeholderText="Please pick start date (yyyy/MM/dd)"
          dateFormat="yyyy/MM/dd"
        />
      </Box>
      <Box mb={"20px"}>
        <Text>End Date</Text>
        <DatePicker
          selected={valueEndDate}
          isClearable
          dateFormat="yyyy/MM/dd"
          onChange={(date) => reportEndDate(date)}
          selectsEnd
          placeholderText="Please pick end date (yyyy/MM/dd)"
          startDate={valueStartDate}
          endDate={valueEndDate}
          minDate={valueStartDate}
        />
      </Box>
    </>
  );
}

export default formsSalesReport;
