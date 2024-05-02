export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const gen_random_uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
export const uuid_generate_v4 = gen_random_uuid;

export const closeDialog = () => {
  const closeButton: any = document.querySelector('button[data-dialog-close]');

  // Check if the button exists to avoid errors
  if (closeButton) {
      // Call the click() method to programmatically click the button
      closeButton.click();
  } else {
      console.error('closeDialog: Close button not found!');
      let event = new KeyboardEvent("keydown", {
        bubbles: true, // This event will bubble up through the DOM
        cancelable: true, // This event can be canceled
        key: "Escape", // The key value, e.g., "Enter"
        keyCode: 27, // The keyCode for "Enter"
        which: 27 // Deprecated, but provided for older browsers
      });
      let inputElement = document.getElementById("dialogItem"); // Get the target element
      inputElement?.dispatchEvent(event); // Dispatch the event to the element
  }        

}
// import LoaderCircle from "lucide-svelte/icons/loader-circle";