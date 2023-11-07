export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  let ftMsg;

  if (isIndex) {
    ftMsg = "Holberton School";
  } else {
    ftMsg = "Holberton School main dashboard";
  }

  return ftMsg;
}

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}
