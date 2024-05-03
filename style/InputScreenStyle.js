import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

export const input_ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'Roboto',
    color: 'black', 
  },
  input: {
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: DefaultTheme.colors.primary,
    width: '100%',
    marginBottom: 10,
    fontSize: 12,
    fontWeight: '100',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  button: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#007bff',
    borderRadius: 5, 
    paddingVertical: 12, 
    paddingHorizontal: 10, 
    alignItems: 'center',
  },
});
