"""
Basic level:
1. Fill all fields in forms except "picture" 
2. Click on [Submit] button
3. Validate inputed data in modal window
Site: https://demoqa.com/automation-practice-form

"""

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
import time


def test_form():
    TEST_DATA = {
        'First_Name': 'Fedor',
        'Last_Name': 'Rost',
        'Email': 'reza4ek@gmail.com',
        'Mobile_Number': '0971112233',
        'Current_Address': 'Ukraine, Kyiv',
        'Check': 'Thanks for submitting the form'
    }

    driver = webdriver.Chrome()
    driver.get("https://demoqa.com/automation-practice-form")
    time.sleep(2)

    driver.find_element_by_css_selector("#firstName").send_keys(TEST_DATA['First_Name'])
    driver.find_element_by_css_selector("#lastName").send_keys(TEST_DATA['Last_Name'])
    driver.find_element_by_css_selector("#userEmail").send_keys(TEST_DATA['Email'])
    driver.find_element_by_css_selector('[for="gender-radio-1"]').click()
    driver.find_element_by_css_selector("#userNumber").send_keys(TEST_DATA['Mobile_Number'])
    driver.find_element_by_id("dateOfBirthInput").clear()
    driver.find_element_by_id("dateOfBirthInput").send_keys(Keys.LEFT_CONTROL, "a")
    driver.find_element_by_id("dateOfBirthInput").send_keys("15 nov 2000", Keys.ENTER)
    driver.find_element_by_css_selector('#subjectsInput').send_keys("Ma")
    driver.find_element_by_css_selector('#subjectsInput').send_keys(Keys.TAB)
    driver.find_element_by_css_selector('[for="hobbies-checkbox-1"]').click()
    driver.find_element_by_css_selector("#currentAddress").send_keys(TEST_DATA['Current_Address'])
    driver.find_element_by_css_selector("[id='react-select-3-input']").send_keys("Haryana", Keys.ENTER)
    driver.find_element_by_css_selector("[id='react-select-4-input']").send_keys("Karnal", Keys.ENTER)

    driver.find_element_by_css_selector("#submit").click()
    time.sleep(3)
    assert "Thanks for submitting the form" in driver.page_source
    driver.quit()

test_form()

def advanced():
    driver = webdriver.Chrome()
    driver.get("https://demoqa.com/webtables")
    time.sleep(2)

    TEST_DATA = {
        'First_Name': 'Fedor',
        'Last_Name': 'Rost',
        'Email': 'reza4ek@gmail.com',
        'Age': 20,
        'Salary': 5000,
        'Department': "QA"
    }

    # Pagination
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    driver.find_element_by_xpath('//option[@value=5]').click()

    # Add new worker
    def add_worker():
        add_worker_btn = driver.find_element_by_css_selector("#addNewRecordButton")
        add_worker_btn.click()

        driver.find_element_by_css_selector("#firstName").send_keys(TEST_DATA['First_Name'])
        driver.find_element_by_css_selector("#lastName").send_keys(TEST_DATA['Last_Name'])
        driver.find_element_by_css_selector("#userEmail").send_keys(TEST_DATA['Email'])
        driver.find_element_by_css_selector("#age").send_keys(TEST_DATA['Age'])
        driver.find_element_by_css_selector("#salary").send_keys(TEST_DATA['Salary'])
        driver.find_element_by_css_selector("#department").send_keys(TEST_DATA['Department'])

        driver.find_element_by_css_selector("#submit").click()

        # driver.quit()

    add_worker()

    def find_elem_by_text(driver, text, tag_name='div'):
        return driver.find_element_by_xpath(f'//{tag_name}[contains(., "{text}")]')

    worker_search = find_elem_by_text(driver, TEST_DATA['Email'], 'div')

    # Delete workers
    def delete_worker():
        driver.find_element_by_css_selector('#delete-record-4').click()
        driver.find_element_by_css_selector('#delete-record-3').click()
        driver.find_element_by_css_selector('#delete-record-2').click()
        driver.find_element_by_css_selector('#delete-record-1').click()

    delete_worker()

    driver.refresh()

    # Find worker in search field and edit it
    def find_worker():
        driver.find_element_by_css_selector('#searchBox').send_keys('Cierra', Keys.ENTER)
        driver.find_element_by_css_selector('#edit-record-1').click()
        driver.find_element_by_css_selector("#firstName").clear()
        driver.find_element_by_css_selector("#firstName").send_keys(TEST_DATA['First_Name'])
        driver.find_element_by_css_selector("#submit").click()

    find_worker()

    time.sleep(5)
    driver.quit()
advanced()