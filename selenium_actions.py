"""
Basic level:
1. Fill all fields in forms except "picture" 
2. Click on [Submit] button
3. Validate inputed data in modal window
Site: https://demoqa.com/automation-practice-form

Advanced level:
Check next test cases:
1. Pagination 
2. Rows count selection
3. Add new worker
4. Delete worker
5. Delete all worker
6. Find worker in search field and edit it
7. Validate data in worker row after creating worker
8. Check search by all column values

https://demoqa.com/webtables
"""
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
TEST_DATA = {
            'First Name': 'Jorge',
            'Last Name': 'Lopes',
            'Email': 'jorgeL@gmail.com',
            'Phone': '1234567890',
            'HB': '07 Jul 1985',
            'Address': 'ARAMARK Ltd. 30 Commercial Road Fratton PORTSMOUTH Hampshire PO1 1AA UNITED KINGDOM'
}

driver = webdriver.Chrome()
driver.get("https://demoqa.com/automation-practice-form")
driver.find_element_by_css_selector("#firstName").send_keys(TEST_DATA['First Name'])
driver.find_element(By.CSS_SELECTOR, "#lastName").send_keys(TEST_DATA['Last Name'])
driver.find_element(By.CSS_SELECTOR, "#userEmail").send_keys(TEST_DATA['Email'])
driver.find_element(By.CSS_SELECTOR, "#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label").click()
driver.find_element(By.CSS_SELECTOR, "#userNumber").send_keys(TEST_DATA['Phone'])
calendar_input = driver.find_element(By.CSS_SELECTOR, "#dateOfBirthInput")
calendar_input.send_keys(Keys.LEFT_CONTROL, 'a')
calendar_input.send_keys('07 Jul 1985', Keys.ENTER)
driver.find_element(By.CSS_SELECTOR, "#subjectsInput").send_keys('Comp')
driver.find_element(By.CSS_SELECTOR, "#subjectsInput").send_keys(Keys.ENTER)
driver.find_element_by_id("hobbies-checkbox-3").send_keys(Keys.SPACE)
driver.find_element(By.CSS_SELECTOR, "#currentAddress").send_keys(TEST_DATA['Address'])
driver.find_element_by_css_selector("#react-select-3-input").send_keys('utt', Keys.ENTER)
driver.find_element_by_css_selector("#react-select-4-input").send_keys('mer', Keys.ENTER)
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
driver.find_element_by_css_selector("#submit").click()
assert "Thanks for submitting the form" == driver.find_element_by_css_selector("#example-modal-sizes-title-lg").text
driver.quit()
