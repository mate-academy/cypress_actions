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
import time

TEST_DATA = {
    'First_name': 'Alexey',
    'Last_name': 'Kurbetyev',
    'Email': 'testemail@gmail.com',
    'Mobile': '1234567890',
    'Date of Birth': '04 aug 2018',
    'Subject': 'English',
    'Current Address': 'Kharkiv'

}

url1 = 'https://demoqa.com/automation-practice-form'
url2 = 'https://demoqa.com/webtables'

def registration():
    driver = webdriver.Chrome()
    driver.get(url1)
    time.sleep(2)
    driver.find_element(By.CSS_SELECTOR, "#firstName" ).send_keys(TEST_DATA['First_name'])
    driver.find_element(By.CSS_SELECTOR, "#lastName" ).send_keys(TEST_DATA['Last_name'])
    driver.find_element(By.CSS_SELECTOR, "#userEmail" ).send_keys(TEST_DATA['Email'])
    driver.find_element(By.CSS_SELECTOR, "#gender-radio-1").send_keys(Keys.SPACE)
    driver.find_element(By.CSS_SELECTOR, "#userNumber" ).send_keys(TEST_DATA['Mobile'])
    driver.find_element(By.CSS_SELECTOR, "#dateOfBirthInput").send_keys(Keys.LEFT_CONTROL, 'a')
    driver.find_element(By.CSS_SELECTOR, "#dateOfBirthInput").send_keys(TEST_DATA['Date of Birth'], Keys.ENTER)
    driver.find_element(By.CSS_SELECTOR, "#subjectsInput").send_keys(TEST_DATA['Subject'])
    driver.find_element(By.CSS_SELECTOR, "#subjectsInput").send_keys(Keys.ENTER)
    driver.find_element_by_id("hobbies-checkbox-3").send_keys(Keys.SPACE)
    driver.find_element(By.CSS_SELECTOR, "#currentAddress" ).send_keys(TEST_DATA['Current Address'])
    driver.find_element(By.CSS_SELECTOR, "#react-select-3-input").send_keys('Raja', Keys.ENTER)
    driver.find_element(By.CSS_SELECTOR, "#react-select-4-input").send_keys('Jaip', Keys.ENTER)
    driver.find_element(By.CSS_SELECTOR, "#submit").click()
    assert 'Thanks for submitting the form' in driver.page_source
    print('Registration is OK!')
    driver.quit()
registration()

def search_edit_worker():
    driver = webdriver.Chrome()
    driver.get(url2)
    time.sleep(2)
    driver.find_element_by_css_selector('#searchBox').send_keys('Kierra')
    time.sleep(2)
    driver.find_element_by_css_selector('[id*=edit-record]').click()
    driver.find_element_by_css_selector('#salary').send_keys(Keys.CONTROL, 'a')
    driver.find_element_by_css_selector('#salary').send_keys('5000')
    driver.find_element_by_css_selector('#submit').click()
    print('Searching/Editing is OK!')
    driver.quit()
search_edit_worker()

def delete_all_workers():
    driver = webdriver.Chrome()
    driver.get(url2)
    time.sleep(2)
    while driver.find_elements_by_css_selector('[id*="delete-record"]'):
        driver.find_element_by_css_selector('[id*="delete-record"]').click()
        print('All workers are  deleted!')
delete_all_workers()