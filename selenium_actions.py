"""Basic level:
   Site: https://demoqa.com/automation-practice-form"""
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.common.keys import Keys


"""1. Fill all fields in forms except "picture"""""
TEST_DATA = {
            'First Name': 'Tom',
            'Last Name': 'Smith',
            'Email': 'tomsmith@gmail.com',
            'Mobile': '0996884532',
            'Birth': '01 Apr 1991',
            'Address': 'lol'
}
driver = webdriver.Chrome()
driver.get("https://demoqa.com/automation-practice-form")
time.sleep(2)

driver.find_element(By.CSS_SELECTOR, "#firstName").send_keys(TEST_DATA['First Name'])
time.sleep(1)
driver.find_element(By.CSS_SELECTOR, "#lastName").send_keys(TEST_DATA['Last Name'])
time.sleep(1)
driver.find_element(By.CSS_SELECTOR, "#userEmail").send_keys(TEST_DATA['Email'])
time.sleep(1)
driver.find_element_by_xpath('//*[@id="genterWrapper"]/div[2]/div[1]/label').click()
time.sleep(1)
driver.find_element(By.CSS_SELECTOR, "#userNumber").send_keys(TEST_DATA['Mobile'])
time.sleep(1)
Birth = driver.find_element(By.CSS_SELECTOR, "#dateOfBirthInput")
Birth.click()
Birth.send_keys(Keys.LEFT_CONTROL, 'a')
Birth.send_keys('01 Apr 1991', Keys.ENTER)
time.sleep(1)
driver.find_element(By.CSS_SELECTOR, "#subjectsInput").send_keys('Computer Science', Keys.ENTER)
time.sleep(1)
driver.find_element_by_xpath('//*[@id="hobbiesWrapper"]/div[2]/div[1]/label').click()
time.sleep(1)
driver.find_element(By.CSS_SELECTOR, "#currentAddress").send_keys(TEST_DATA['Address'])
time.sleep(1)
driver.find_element_by_css_selector("#react-select-3-input").send_keys('nc', Keys.ENTER)
time.sleep(1)
driver.find_element_by_css_selector("#react-select-4-input").send_keys('no', Keys.ENTER)
time.sleep(1)


"""2. Click on [Submit] button"""
driver.find_element_by_css_selector("#submit").click()
time.sleep(1)

"""3. Validate inputed data in modal window"""
assert driver.find_element_by_css_selector("#example-modal-sizes-title-lg")
time.sleep(2)
driver.quit()


"""Advanced level:
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
