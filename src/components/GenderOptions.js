import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const GenderOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [customOptionText, setCustomOptionText] = useState("");

  const handleOptionToggle = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.optionsWrapper}>
        <OptionRow option="Male" selectedOption={selectedOption} handleOptionToggle={handleOptionToggle} />
        <OptionRow option="Female" selectedOption={selectedOption} handleOptionToggle={handleOptionToggle} />
        <OptionRow option="Non-Binary" selectedOption={selectedOption} handleOptionToggle={handleOptionToggle} />
        <OptionRow option="Agender" selectedOption={selectedOption} handleOptionToggle={handleOptionToggle} />
        <OptionRow option="Bigender" selectedOption={selectedOption} handleOptionToggle={handleOptionToggle} />
        {/* Custom Option */}
        <OptionRow
          option="Custom"
          selectedOption={selectedOption}
          handleOptionToggle={handleOptionToggle}
          customInput
          customOptionText={customOptionText}
          setCustomOptionText={setCustomOptionText}
        />
      </View>
    </View>
  );
};

const OptionRow = ({ option, selectedOption, handleOptionToggle, customInput, customOptionText, setCustomOptionText }) => {
  const isSelected = option === selectedOption;

  return (
    <TouchableOpacity
      style={styles.optionContainer}
      onPress={() => handleOptionToggle(option)}
      disabled={customInput && isSelected} // Disable for custom input if already selected
    >
      <View style={[styles.checkbox, isSelected && styles.checked]} />
      <Text style={styles.optionText}>{option}</Text>
      {customInput && isSelected && (
        <TextInput
          placeholder="Custom"
          placeholderTextColor="#999"
          style={[styles.optionText, styles.customTextInput]}
          value={customOptionText}
          onChangeText={setCustomOptionText}
          
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  optionsWrapper: {
    width: "100%",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#333",
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#333",
  },
  optionText: {
    fontSize: 16,
  },
  customTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingVertical: 5,
    marginLeft: 10,
  },
});

export default GenderOptions;
