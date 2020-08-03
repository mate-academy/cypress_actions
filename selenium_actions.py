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

#Basic level:
from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


driver = webdriver.Chrome()
driver.get('https://demoqa.com/automation-practice-form')
driver.find_element(By.CSS_SELECTOR, '#firstName').send_keys('Valera')
driver.find_element(By.CSS_SELECTOR, '#lastName').send_keys('Nastalo')
driver.find_element(By.CSS_SELECTOR, '#userEmail').send_keys('tvojeVremya@gmail.com')
driver.find_element(By.CSS_SELECTOR, '#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1)').click()
driver.find_element(By.CSS_SELECTOR, '#userNumber').send_keys('0953321488')
date_of_birth = driver.find_element(By.CSS_SELECTOR, '#dateOfBirthInput')
date_of_birth.send_keys(Keys.CONTROL, 'a')
date_of_birth.send_keys('05 Aug 2020', Keys.ENTER)
subjects = driver.find_element(By.CSS_SELECTOR, '#subjectsInput')
subjects.click()
time.sleep(2)
subjects.send_keys('English', Keys.ENTER)
driver.find_element(By.CSS_SELECTOR, '#hobbies-checkbox-1').send_keys(Keys.SPACE)
driver.find_element(By.CSS_SELECTOR, '#hobbies-checkbox-2').send_keys(Keys.SPACE)
driver.find_element(By.CSS_SELECTOR, '#hobbies-checkbox-3').send_keys(Keys.SPACE)
driver.find_element(By.CSS_SELECTOR, '#currentAddress').send_keys('Kharkiv')
driver.find_element_by_xpath('//*[@id="react-select-3-input"]').send_keys('NCR', Keys.ENTER)
driver.find_element_by_xpath('//*[@id="react-select-4-input"]').send_keys('Delhy', Keys.ENTER)
if 'Thanks for submitting the form' in driver.page_source:
    driver.quit()

#Advanced level:

driver = webdriver.Chrome()
driver.get('https://demoqa.com/webtables')
#Add new worker
driver.find_element(By.CSS_SELECTOR, '#addNewRecordButton').click()
driver.find_element(By.CSS_SELECTOR, '#firstName').send_keys('Vasya')
driver.find_element(By.CSS_SELECTOR, '#lastName').send_keys('Oblomov')
driver.find_element(By.CSS_SELECTOR, '#userEmail').send_keys('werw@gmail.com')
driver.find_element(By.CSS_SELECTOR, '#age').send_keys('24')
driver.find_element(By.CSS_SELECTOR, '#salary').send_keys('400')
driver.find_element(By.CSS_SELECTOR, '#department').send_keys('QA Engineer')
driver.find_element(By.CSS_SELECTOR, '#submit').click()
#
#Delete worker

driver.find_element(By.CSS_SELECTOR, '#delete-record-3').click()


# #Find worker in search field and edit it

driver.find_element(By.CSS_SELECTOR, '#searchBox').send_keys('Cierra')
driver.find_element(By.CSS_SELECTOR, '[id*=edit-record]').click()
driver.find_element(By.CSS_SELECTOR, '#firstName').clear()
driver.find_element(By.CSS_SELECTOR, '#firstName').send_keys('Vincent')
driver.find_element(By.CSS_SELECTOR, '#submit').click()


#Delete all worker
def delete_all_workers():
    while driver.find_elements_by_css_selector('[id*="delete-record"]'):
        driver.find_element_by_css_selector('[id*="delete-record"]').click()
delete_all_workers()
