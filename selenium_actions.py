"""
Basic level:
1. Fill all fields in forms except "picture"
2. Click on [Submit] button
3. Validate inputed data in modal window
Site: https://demoqa.com/automation-practice-form
"""

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.action_chains import ActionChains
from random import randint, randrange
from faker import Faker
from time import sleep

# Starting driver
browser = webdriver.Chrome()
actions = ActionChains(browser)
browser.maximize_window()
fake = Faker()


def basic_task():

    # Getting URL
    browser.get("https://demoqa.com/automation-practice-form")

    # First name field
    browser.find_element_by_css_selector("#firstName").send_keys("Dmitriy")

    # Last name field
    browser.find_element_by_css_selector("#lastName").send_keys("Lebed")

    # Email field
    browser.find_element_by_css_selector("#userEmail").send_keys("up2dmas@gmail.com")

    # Gender checkbox
    browser.find_element_by_id("gender-radio-1").send_keys(Keys.SPACE)

    # Mobile (10 digits) field
    browser.find_element_by_css_selector("#userNumber").send_keys("0637997707")

    # Date of Birth form
    browser.find_element_by_css_selector("#dateOfBirthInput").click()
    month_dropdown = Select(browser.find_element_by_css_selector(".react-datepicker__month-select")).select_by_value(
        "11")
    year_dropdown = Select(browser.find_element_by_css_selector(".react-datepicker__year-select")).select_by_value(
        "1990")
    date_picker = browser.find_element_by_css_selector(".react-datepicker__day--018").click()

    # Subjects input
    browser.find_element_by_css_selector("#subjectsInput").send_keys("Maths")
    browser.find_element_by_css_selector("#subjectsInput").send_keys(Keys.TAB)  # Changed from ENTER key

    # Hobbies checkboxes
    browser.find_element_by_id("hobbies-checkbox-1").send_keys(Keys.SPACE)
    browser.find_element_by_id("hobbies-checkbox-2").send_keys(Keys.SPACE)
    browser.find_element_by_id("hobbies-checkbox-3").send_keys(Keys.SPACE)

    # Current address textbox
    browser.find_element_by_css_selector("#currentAddress").send_keys(
        "My address not the house, not even the street, my address is USSR.")

    # Scrolling to the bottom of the page
    actions.move_to_element(browser.find_element_by_css_selector(".mt-40")).perform()

    # Select State dropdown
    browser.find_element_by_css_selector("[id='react-select-3-input']").send_keys(Keys.ARROW_DOWN)
    browser.find_element_by_css_selector("[id='react-select-3-input']").send_keys(Keys.ENTER)

    # Select City dropdown
    browser.find_element_by_css_selector("[id='react-select-4-input']").send_keys(Keys.ARROW_DOWN)
    browser.find_element_by_css_selector("[id='react-select-4-input']").send_keys(Keys.ENTER)

    # Clicking on [Submit] button
    browser.find_element_by_css_selector("#submit").click()

    # Checking if the form is successfully submitted
    assert "Thanks for submitting the form" in browser.page_source

    print("BASIC TASK IS DONE\n")


"""
Advanced level:
Check next test cases:
1. Pagination [done]
2. Rows count selection [done]
3. Add new worker [done]
4. Delete worker [done]
5. Delete all worker [done]
6. Find worker in search field and edit it [done]
7. Validate data in worker row after creating worker [done]
8. Check search by all column values [done]

https://demoqa.com/webtables
"""


def add_new_workers_generator_and_validator(n_times):
    for i in range(n_times):
        full_name = fake.name()
        first_and_last_filler = full_name.split()
        email_filler = ''.join(first_and_last_filler)
        firstname = first_and_last_filler[0]
        lastname = first_and_last_filler[1]
        email = email_filler + "@gmail.com"
        age = str(randint(18,60))
        salary = str(randrange(10000,20000,1000))
        dept = "Mate.Academy"
        browser.find_element_by_css_selector("#addNewRecordButton").click()
        browser.find_element_by_css_selector("#firstName").send_keys(firstname)
        browser.find_element_by_css_selector("#lastName").send_keys(lastname)
        browser.find_element_by_css_selector("#userEmail").send_keys(email)
        browser.find_element_by_css_selector("#age").send_keys(age)
        browser.find_element_by_css_selector("#salary").send_keys(salary)
        browser.find_element_by_css_selector("#department").send_keys(dept)
        browser.find_element_by_css_selector("#submit").click()
        rows = browser.find_elements_by_xpath('//div[contains(@class, "rt-tr-group")][.//span[contains(@title, "Edit")]]')
        assert firstname in rows[-1].find_element_by_css_selector('.rt-td:nth-child(1)').text
        assert lastname in rows[-1].find_element_by_css_selector('.rt-td:nth-child(2)').text
        assert age in rows[-1].find_element_by_css_selector('.rt-td:nth-child(3)').text
        assert email in rows[-1].find_element_by_css_selector('.rt-td:nth-child(4)').text
        assert salary in rows[-1].find_element_by_css_selector('.rt-td:nth-child(5)').text
        assert dept in rows[-1].find_element_by_css_selector('.rt-td:nth-child(6)').text
        print(f"User [{firstname}] successfully added and validated")


def search_by_firstname_validator(search_firstname):
    browser.find_element_by_css_selector("#searchBox").send_keys(search_firstname)
    rows = browser.find_elements_by_xpath('//div[contains(@class, "rt-tr-group")][.//span[contains(@title, "Edit")]]')
    assert search_firstname in rows[0].find_element_by_css_selector('.rt-td:nth-child(1)').text
    print(f"Search by First Name {search_firstname} is working correctly")
    clearing_search_field()


def search_by_lastname_validator(search_lastname):
    browser.find_element_by_css_selector("#searchBox").send_keys(search_lastname)
    rows = browser.find_elements_by_xpath('//div[contains(@class, "rt-tr-group")][.//span[contains(@title, "Edit")]]')
    assert search_lastname in rows[0].find_element_by_css_selector('.rt-td:nth-child(2)').text
    print(f"Search by Last Name {search_lastname} is working correctly")
    clearing_search_field()


def search_by_age_validator(search_age):
    browser.find_element_by_css_selector("#searchBox").send_keys(search_age)
    rows = browser.find_elements_by_xpath('//div[contains(@class, "rt-tr-group")][.//span[contains(@title, "Edit")]]')
    assert str(search_age) in rows[0].find_element_by_css_selector('.rt-td:nth-child(3)').text
    print(f"Search by Age {search_age} is working correctly")
    clearing_search_field()


def search_by_email_validator(search_email):
    browser.find_element_by_css_selector("#searchBox").send_keys(search_email)
    rows = browser.find_elements_by_xpath('//div[contains(@class, "rt-tr-group")][.//span[contains(@title, "Edit")]]')
    assert search_email in rows[0].find_element_by_css_selector('.rt-td:nth-child(4)').text
    print(f"Search by Email {search_email} is working correctly")
    clearing_search_field()


def search_by_salary_validator(search_salary):
    browser.find_element_by_css_selector("#searchBox").send_keys(search_salary)
    rows = browser.find_elements_by_xpath('//div[contains(@class, "rt-tr-group")][.//span[contains(@title, "Edit")]]')
    assert str(search_salary) in rows[0].find_element_by_css_selector('.rt-td:nth-child(5)').text
    print(f"Search by Salary {search_salary} is working correctly")
    clearing_search_field()


def search_by_dept_validator(search_dept):
    browser.find_element_by_css_selector("#searchBox").send_keys(search_dept)
    rows = browser.find_elements_by_xpath('//div[contains(@class, "rt-tr-group")][.//span[contains(@title, "Edit")]]')
    assert search_dept in rows[0].find_element_by_css_selector('.rt-td:nth-child(6)').text
    print(f"Search by Department {search_dept} is working correctly")
    clearing_search_field()


def delete_some_workers(n_times, n=1):
    for i in range(n_times):
        browser.find_element_by_css_selector(f'[id="delete-record-{n}"]').click()
        n += 1


def delete_all_workers():
    while browser.find_elements_by_css_selector('[id*="delete-record"]'):
        browser.find_element_by_css_selector('[id*="delete-record"]').click()


def page_label_send_page(page):
    page_label = browser.find_element_by_css_selector('[aria-label="jump to page"]')
    page_label.send_keys(Keys.LEFT_CONTROL, 'a')
    page_label.send_keys(f"{page}")
    page_label.send_keys(Keys.ENTER)


def rows_count_selection(number_of_rows):
    number_of_rows_selector = Select(browser.find_element_by_css_selector('[aria-label="rows per page"]'))
    number_of_rows_selector.select_by_value(f"{number_of_rows}")


def find_worker_and_edit_salary(worker_name, salary):
    browser.find_element_by_css_selector("#searchBox").send_keys(f"{worker_name}")
    browser.find_element_by_css_selector('[id="edit-record-1"]').click()
    workers_salary_field = browser.find_element_by_css_selector("#salary")
    workers_salary_field.send_keys(Keys.LEFT_CONTROL, 'a')
    workers_salary_field.send_keys(f"{salary}")
    browser.find_element_by_css_selector("#submit").click()
    clearing_search_field()


def clearing_search_field():
    search_field = browser.find_element_by_css_selector("#searchBox")
    search_field.click()
    search_field.send_keys(Keys.LEFT_CONTROL, 'a')
    search_field.send_keys(Keys.BACKSPACE)


def next_or_previous_page(previous0_next1):
    if previous0_next1 == 0:
        browser.find_element_by_css_selector(".-previous").click()
    elif previous0_next1 == 1:
        browser.find_element_by_css_selector(".-next").click()
    else:
        return "Wrong page"


def main():
    basic_task()
    browser.get("https://demoqa.com/webtables")
    search_by_firstname_validator("Cierra")
    search_by_lastname_validator("Vega")
    search_by_age_validator(39)
    search_by_email_validator("cierra@example.com")
    search_by_salary_validator(10000)
    search_by_dept_validator("Insurance")
    add_new_workers_generator_and_validator(6)
    rows_count_selection(5)
    next_or_previous_page(1)
    next_or_previous_page(0)
    find_worker_and_edit_salary("Cierra", 12500)
    page_label_send_page(2)
    page_label_send_page(1)
    delete_some_workers(2)
    delete_all_workers()
    browser.quit()


if __name__ == "__main__":
    main()
    if SystemExit.code != 0:
        print("\n=== Hometask is DONE ===")